module Welcome
  class HomeController < ::ApplicationController
    def rules
      {
        :index => lambda{true}
      }
    end

    def index
      # TODO: make layouts parent directory configurable
      render 'bastion/layouts/application', :layout => false
    end
  end
end
