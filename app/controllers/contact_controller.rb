class ContactController < ApplicationController
  invisible_captcha only: [:send_mail], on_spam: :spam_bye

  def index
    puts request.url
  end

  def send_mail
    subject = params[:subject] || "Contact Form"
    message = params[:message] || ""

    first_name = params[:first_name]
    last_name = params[:last_name]
    email = params[:email]
    phone = params[:phone] || ""
    company = params[:company]
    jobtitle = params[:jobtitle]
    jobdescription = params[:jobdescription]
    skillsneeded = params[:skillsneeded]
    typeofservice = params[:typeofservice]
    payrate = params[:payrate]
    hoursperweek = params[:hoursperweek]
    companysize = params[:companysize]
    website = params[:website]
    branch = params[:branch]
    resource = params[:resource]
  
    
    ContactMailer.contact_email(resource, jobtitle, jobdescription, skillsneeded, typeofservice, payrate, hoursperweek, companysize, company, website, branch, first_name, last_name, email, subject, phone, message).deliver
    redirect_to request.referrer, notice: "Your message was sent, we'll be in touch soon"
  end

  private

  def spam_bye
    redirect_to root_path
  end
end
