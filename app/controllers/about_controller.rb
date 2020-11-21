class AboutController < ApplicationController
  def index
  end

  def meet_the_team
    render layout: "application_without_jquery"
  end
end
