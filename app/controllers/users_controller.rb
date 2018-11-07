class UsersController < ApplicationController

	def create
		puts"**"*100
		@user = User.new(user_params)
		if @user.save
			@user.create_shop
		end
		return redirect_to create_shop_path
	end

	def new
		@user = User.new
	end

	private

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation)
	end
end
