class UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if @user.save
			@user.create_shop
			return redirect_to create_shop_path
		end
		redirect_to :back, flash: {new_solution_errors: "You're already signed up with this email"}
	end

	def new
		@user = User.new
	end

	private

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation)
	end

	def render_with_errors

	end

end
