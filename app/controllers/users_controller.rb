class UsersController < ApplicationController
  before_filter :authorize_if_admin, only: [:index, :new, :create, :delete]
  before_filter :authorize_if_admin_or_current_user, only: [:edit, :update]

  def index
    @users = User.all
  end

  def edit
    @user = find_user
  end

  def update
    @user = find_user
    @user.update_attributes(user_params)

    if @user.save
      redirect_to users_url, notice: "#{@user.full_name} updated."
    else
      flash[:alert] = "We could not save #{@user.full_name}."
      render 'edit'
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to users_url, notice: "#{@user.full_name} created."
    else
      flash[:alert] = "We could create this user."
      render 'new'
    end
  end

  def destroy
    @user = find_user
    @user.destroy
    redirect_to users_url, notice: "#{@user.full_name} deleted."
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :admin, :email, :password, :password_confirmation)
  end

  def find_user
    User.find(params[:id])
  end
end
