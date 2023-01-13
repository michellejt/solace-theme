class Jekyll::Converters::Markdown::Crimsoncarpet
    def initialize(config)
        @config = config
        options = {
            strikethrough: true,
            no_intra_emphasis: true,
            tables: true,
            space_after_headers: true,
            underline: true,
            footnotes: true,
            fenced_code_blocks: true
        }
        @renderer = Redcarpet::Markdown.new(Crimsoncarpet, options)
    end

    def convert(content)
        @renderer.render(content)
    end
end