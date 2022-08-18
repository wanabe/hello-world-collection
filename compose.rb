require "yaml"
require "pathname"

class Compose
  attr_reader :path, :data

  def initialize(path, clean: false)
    path = File.dirname(path) if File.file?(path)
    @path = path
    if clean
      @data = {"version" => "3"}
    else
      path = File.join(path, "docker-compose.yml")
      yaml = File.read(path)
      @data = YAML.load(yaml)
    end
  end

  def merge!(other)
    services = other.data.dig("services")
    services&.each do |service, sdata|
      @data["services"] ||= {}
      @data["services"][service] ||= {}
      sdata.each do |attr, d|
        case attr
        when "build"
          if d.is_a?(String)
            @data["services"][service][attr] = other.relative_path(d, from: @path).to_s
          else
            @data["services"][service][attr] = d
          end
        when "volumes"
          d.each do |volume|
            /^(?<src_path>[^:]*):(?<v>.*)/ =~ volume
            dst_path = other.relative_path(src_path, from: @path)
            @data["services"][service][attr] ||= []
            @data["services"][service][attr].push("./#{dst_path}:#{v}")
          end
        else
          @data["services"][service][attr] = d
        end
      end
    end
    self
  end

  def relative_path(file, from:)
    Pathname.new(path).join(file).relative_path_from(from)
  end

  def save
    File.write("docker-compose.yml", data.to_yaml)
  end
end

ARGV.inject(Compose.new(".", clean: true)) do |compose, path|
  compose.merge!(Compose.new(path))
end.save
