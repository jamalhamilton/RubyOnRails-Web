class Job < ActiveRecord::Base
  validates_presence_of :company, :contact_name, :email, :title, :department, :salary, :language

  #AVIONTE_URL = "http://joy.aviontego.com/portals/portals/jobboard/requirelogin.aspx?JobIDs="
  STATES = [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

  scope :unapproved, -> { where(date_approved: nil) }

  def location
    if self.city.present? && self.state.present?
      "<span class='upcase'>#{self.city}</span>, <span class='uppercase'>#{self.state}</span>"
    elsif self.state.present?
      "<span class='uppercase'>#{self.state}</span>"
    elsif self.city.present?
      "<span class='upcase'>#{self.city}</span>"
    else
      ""
    end
  end

  def formatted_date
    "#{self.date_approved.strftime('%b %d')}"
  end

  def job_url
    "#{Job::AVIONTE_URL}#{self.avionte_job_id}&CompanyID=JoynusStaffing&WebJobGUID=#{self.webjobguid}"
  end
end
