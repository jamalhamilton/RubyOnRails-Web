class User < ActiveRecord::Base
  has_secure_password
  validates_uniqueness_of :email
  validates_presence_of :first_name, :last_name, :email
  validates_presence_of :password, :password_confirmation, on: :create

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end
