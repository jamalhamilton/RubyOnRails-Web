class ContactMailer < ActionMailer::Base

  
    
  def contact_email(resource,jobtitle,jobdescription,skillsneeded,typeofservice,payrate,hoursperweek,companysize,company,website,branch,first_name, last_name, email, subject,  phone, message)
  
    
    @to_email_oth = Rails.env.development? ? 'test@joynus.com' : 'contact@joynus.com'
    @company = company
    @website = website
    @branch = branch
    @first_name = first_name
    @last_name = last_name
    @email = email
    @subject = subject
    @message = message
    @phone = phone
    @companysize = companysize
    @jobtitle = jobtitle
    @jobdescription = jobdescription
    @skillsneeded = skillsneeded
    @typeofservice = typeofservice
    @payrate = payrate
    @hoursperweek = hoursperweek
    @resource = resource
    
    
    if @branch 
    mail subject: (@subject+ "  ["+@branch+"]"),
         to: @to_email_oth,
         from: @email
    
    elsif @companysize
    mail subject: ("Hello, I'm from " + @company),
         to: @to_email_oth,
         from: @email
    end     
  end
  
 
end
