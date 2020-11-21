class ContactMailer < ActionMailer::Base

  
    
  def contact_email(resource,jobtitle,jobdescription,skillsneeded,typeofservice,payrate,hoursperweek,companysize,company,website,branch,first_name, last_name, email, subject,  phone, message)
  
    @to_email_nor = Rails.env.development? ? 'norcrossjoynus@gmail.com' : 'norcross@joynus.com'
    @to_email_dal = Rails.env.development? ? 'daltonjoynus@gmail.com' : 'dalton@joynus.com'
    @to_email_lag = Rails.env.development? ? 'lagrangejoynus@gmail.com' : 'lagrange@joynus.com'
    @to_email_ope = Rails.env.development? ? 'opelikajoynus@gmail.com' : 'opelika@joynus.com'
    @to_email_gre = Rails.env.development? ? 'greenvillejoynus@gmail.com' : 'greenville@joynus.com'
    @to_email_man = Rails.env.development? ? 'mantecajoynus@gmail.com' : 'manteca@joynus.com'
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
    if @branch && @branch== "Norcross, GA"
    mail subject: (@subject+ "  ["+@branch+"]"),
         to: @to_email_nor,
         from: @email,
         cc: @to_email_oth
    elsif @branch && @branch== ""
    mail subject: (@subject+ "  ["+@branch+"]"),
         to: @to_email_oth,
         from: @email,
         cc: @to_email_oth 
    
    elsif @branch && @branch== "Dalton, GA"
    mail subject: (@subject+ "  ["+@branch+"]"),
         to: @to_email_dal,
         from: @email,
         cc: @to_email_oth  
    
    elsif @branch && @branch== "Lagrange, GA"
    mail subject: (@subject+ "  ["+@branch+"]"),
         to: @to_email_lag,
         from: @email,
         cc: @to_email_oth  
    elsif @branch && @branch== "Opelika, AL"
    mail subject: (@subject+ "  ["+@branch+"]"),
         to: @to_email_ope,
         from: @email,
         cc: @to_email_oth
    elsif @branch && @branch== "Greenville, AL"
    mail subject: (@subject+ "  ["+@branch+"]"),
         to: @to_email_gre,
         from: @email,
         cc: @to_email_oth       
    elsif @branch && @branch== "Manteca, CA"
    mail subject: (@subject+ "  ["+@branch+"]"),
         to: @to_email_man,
         from: @email,
         cc: @to_email_oth       
    elsif @branch && @branch== "Others"
    mail subject: (@subject+ "  ["+@branch+"]"),
         to: @to_email_oth,
         from: @email,
         cc: @to_email_oth     
    
    elsif @companysize
    mail subject: ("Hello, I'm from " + @company),
         to: @to_email_oth,
         from: @email
    end     
  end
  
 
end
