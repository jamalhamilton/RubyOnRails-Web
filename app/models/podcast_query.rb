class PodcastQuery
  def initialize
    @podcasts = Podcast.order("created_at DESC")
  end

  def most_recent
    
    @podcasts[0] || (raise StandardError.new "you need at least one Podcast")
  end

  def next_three_most_recent
    @podcasts[1..3]
  end

  def remaining
      @podcasts[4..-1]
  end
  
end