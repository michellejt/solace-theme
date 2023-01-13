require "redcarpet"
require "rouge"
require "rouge/plugins/redcarpet"

class Crimsoncarpet < Redcarpet::Render::HTML
    include Rouge::Plugins::Redcarpet
    def image(link, title, alt)
        name = File.basename(link, ".*")
        img = "<img src=\"#{link}\" alt=\"#{alt}\" title=\"#{title}\">"
        figure = "<a href=\"#{link}\" data-lightbox=\"#{name}\" data-title=\"#{alt}\">#{img}</a>"
        caption = title ? "<figcaption>#{title}</figcaption>" : ""
        return "<figure>#{figure}#{caption}</figure>"
    end
end