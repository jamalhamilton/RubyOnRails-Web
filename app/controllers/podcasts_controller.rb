class PodcastsController < ApplicationController
  before_action :find_podcast, only: [:show, :edit, :update, :destroy]
  before_filter :authorize, only: [:edit, :update, :new, :create, :destroy]
  impressionist :actions=>[:show,:index]
  
  def index
    
    podcast_query = PodcastQuery.new
    # this is one podcast object
    @most_recent_podcast = podcast_query.most_recent
    # these are arrays of podcasts
    @next_three_most_recent_podcasts = podcast_query.next_three_most_recent
    if params[:tag].present?
      @podcasts = Podcast.all.tagged_with(params[:tag]).paginate(page: params[:page], per_page: 4)
    else
      @podcasts =Podcast.all.paginate(page: params[:page], per_page: 4)
    end  
    @tags = Podcast.tag_counts_on(:tags)
    
    
  end
  
  # GET /podcasts/1
  # GET /podcasts/1.json
  
  def show
    if params[:tag].present?
      @podcasts = Podcast.all.tagged_with(params[:tag]).paginate(page: params[:page], per_page: 4)
    else
      @podcasts =Podcast.all.paginate(page: params[:page], per_page: 4)
    end  
    impressionist(@podcast)
  end

  # GET /podcasts/new
  def new
    @podcast = Podcast.new
  end

  # GET /podcasts/1/edit
  def edit
  end

  # POST /podcasts
  # POST /podcasts.json
  def create
    @podcast = Podcast.new(podcast_params)

    
      if @podcast.save
        redirect_to @podcast, notice: 'Podcast was successfully created.'
        
      else
        render :new 
       
      end
    
  end

  # PATCH/PUT /podcasts/1
  # PATCH/PUT /podcasts/1.json
  def update
    
      if @podcast.update(podcast_params)
        redirect_to @podcast, notice: 'Podcast was successfully updated.'
        
      else
        render :edit
       
      end
    
  end

  # DELETE /podcasts/1
  # DELETE /podcasts/1.json
  def destroy
    @podcast.destroy
    redirect_to pocasts_url, notice: "#{@podcast.episode_title} Deleted"
    
  end
  
  
  
  
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def find_podcast
      @podcast = Podcast.friendly.find(params[:id])
    end
    
    # Never trust parameters from the scary internet, only allow the white list through.
    def podcast_params
      params.require(:podcast).permit(:episode_url, :episode_title, :episode_description, :episode_audio_url, :episode_summary, :tag_list, :published_date)
    end
  
    def tag_cloud
      @tags = Podcast.tag_counts_on(:tags)
    end
   
    
end
