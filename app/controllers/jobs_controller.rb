class JobsController < ApplicationController
  before_filter :authorize, only: [:approve, :edit, :update, :destroy]

  def index
=begin    puts "------>>>> #{I18n.locale}"
=end    @jobs = Job.where.not(date_approved: nil)
    redirect_to "https://jobs.joynus.com"
  end

  def create
    @job = Job.create(job_params)
    flash[:notice] = "Your job opening will be reviewed and posted."
    redirect_to employers_path
  end

  def show
    @job = find_job
  end

  def edit
    @job = find_job
  end

  def update
    @job = find_job
    @job.update_attributes(job_params)
    if referrer == 'unapproved_jobs'
      redirect_to unapproved_job_url(@job), notice: "#{@job.title} Updated"
    else
      redirect_to job_url(@job), notice: "#{@job.title} Updated"
    end
  end

  def approve
    Job.where(id: params[:job_ids]).update_all(date_approved: Date.today)
    redirect_to jobs_path
  end

  def destroy
    @job = find_job
    @job.destroy
    if referrer == 'unapproved_jobs'
      redirect_to unapproved_jobs_url, notice: "#{@job.title} Deleted"
    else
      redirect_to jobs_url, notice: "#{@job.title} Deleted"
    end
  end

  private
  def job_params
    params.require(:job).permit(:company, :contact_name, :contact_title, :contact_city, :contact_state, :email, :phone, :city, :state, :zip_code, :description, :title, :salary, :department, :language, :featured, :avionte_job_id, :webjobguid)
  end

  def find_job
    Job.find(params[:id])
  end

  def referrer
    Rails.application.routes.recognize_path(request.referer)[:controller]
  end
end
