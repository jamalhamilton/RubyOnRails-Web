class UnapprovedJobsController < ApplicationController
  before_filter :authorize

  def index
    @jobs = Job.where(date_approved: nil)
  end

  def show
    @job = find_job
  end

  def edit
    @job = find_job
  end

  private
  def find_job
    Job.find(params[:id])
  end
end
