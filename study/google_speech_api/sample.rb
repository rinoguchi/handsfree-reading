# coding:utf-8
 
require 'pp'
require 'uri'
require 'json'
require 'net/http'
require 'fileutils'
require 'openssl'

WAVFILE="./tmp/voice.wav"
FLACFILE="./tmp/voice.flac"
 
Net::HTTP.version_1_2
def get_command_from_voice
  `rec #{WAVFILE} trim 0 00:03`
  FileUtils.rm_f(FLACFILE)
  `ffmpeg -i #{WAVFILE} -vn -ac 1 -ar 16000 -acodec flac #{FLACFILE}`

  uri = URI.parse("https://www.google.com/speech-api/v2/recognize?key=AIzaSyAy6ARxp-zfo-ThlGgauvFMXgGgbQXgXVU&xjerr=1&client=chromium&lang=ja&maxresults=6&pfilter=2")
  req = Net::HTTP::Post.new(uri.request_uri)
  req.body = File.read(FLACFILE)
  req.content_type = "audio/x-flac; rate=16000"
  req.content_length = req.body.size
  req['User-Agent'] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.47 Safari/536.11"
  req['Accept-Language'] = "ja,en-US;q=0.8,en;q=0.6"
  req['Accept-Charset'] = "utf-8;q=0.7,*;q=0.3"
   
  http = Net::HTTP.new(uri.host,uri.port)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_NONE
 
  http.start do |h|
    res = h.request(req)
    puts res.body
    result = JSON.parse(res.body.split("\n")[1])
    puts result
    command = result["result"][0]["alternative"].select{|e| e["confidence"]}[0]["transcript"]
    return command
  end
end

# main
command = get_command_from_voice
puts "コマンド:" + command

`say #{command}`




case command
when "いち","一","1","１"
  `say "ここで１番目のレシピを発音する"`
end

