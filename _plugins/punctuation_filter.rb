module Jekyll::PunctuationFilter
  def correct_punctuation(string)
    correct = string.to_s
    [';', ':', '!', '?'].each do |sign|
      correct = correct.gsub " #{sign}", "&#8239;#{sign}"
    end
    correct
  end
end

Liquid::Template.register_filter(Jekyll::PunctuationFilter)
