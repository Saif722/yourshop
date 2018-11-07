class User < ApplicationRecord

 validates :email, presence: true, uniqueness: true, length: {maximum: 50}, format: /.+@.+\..+/i

 has_secure_password

 has_one :shop, dependent: :destroy 

end
