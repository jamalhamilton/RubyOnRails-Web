require 'test_helper'

class AdsControllerTest < ActionController::TestCase
  test "should get fb" do
    get :fb
    assert_response :success
  end

end
