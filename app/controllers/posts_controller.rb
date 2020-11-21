class PostsController < ApplicationController
  before_filter :authorize, only: [:edit, :update, :new, :create, :destroy]
  before_filter :find_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.order("created_at DESC").paginate(page: params[:page], per_page: 9)
    
    respond_to do |format|
      format.html
      format.rss { render :layout =>false }
    end
  end

  def show
    
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to posts_url
    else
      render 'new'
    end
  end

  def edit

  end

  def update
    if @post.update_attributes(post_params)
      redirect_to post_url(@post), notice: "#{@post.title} Updated"
    else
      render 'edit'
    end
  end

  def destroy
    @post.destroy

    redirect_to posts_url, notice: "#{@post.title} Deleted"
  end

  private

  def post_params
    params.require(:post).permit(:title, :social_title, :contents, :author_id, :approved, :summary, :preview_image_id, :category, :blog_title)
  end

  def find_post
    @post = Post.friendly.find(params[:id])

    # If an old id or a numeric id was used to find the record, then
    # the request path will not match the post_path, and we should do
    # a 301 redirect that uses the current friendly id.
    if params[:action] == 'show' && request.path != post_path(@post)
      return redirect_to @post, :status => :moved_permanently
    end
  end
  
  
end
