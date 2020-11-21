require 'test_helper'

class PodcastsControllerTest < ActionController::TestCase
  setup do
    @podcast = podcasts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:podcasts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create podcast" do
    assert_difference('Podcast.count') do
      post :create, podcast: { episode_audio_url: @podcast.episode_audio_url, episode_description: @podcast.episode_description, episode_summary: @podcast.episode_summary, episode_title: @podcast.episode_title, episode_url: @podcast.episode_url }
    end

    assert_redirected_to podcast_path(assigns(:podcast))
  end

  test "should show podcast" do
    get :show, id: @podcast
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @podcast
    assert_response :success
  end

  test "should update podcast" do
    patch :update, id: @podcast, podcast: { episode_audio_url: @podcast.episode_audio_url, episode_description: @podcast.episode_description, episode_summary: @podcast.episode_summary, episode_title: @podcast.episode_title, episode_url: @podcast.episode_url }
    assert_redirected_to podcast_path(assigns(:podcast))
  end

  test "should destroy podcast" do
    assert_difference('Podcast.count', -1) do
      delete :destroy, id: @podcast
    end

    assert_redirected_to podcasts_path
  end
end
