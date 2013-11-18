module Welcome
  module Navigation
    class Welcome < ::Navigation::Menu
      def initialize(organization)
        @type          = 'dropdown'
        @key           = :welcome
        @display       = _("Welcome")
        @authorization = lambda{ organization && organization.readable? }
        @items         = [
                          Navigation::Home.new(organization)
                         ]
        super
      end
    end
    class Home < ::Navigation::Item
      def initialize(organization)
        @key           = :home
        @display       = _("Home")
        @authorization = lambda{ organization && organization.readable? }
        @url           = home_path
      end
    end
  end
end
