import React from 'react'
import VideoCard from "./VideoCard"
import './RecommendedVideos.css'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                 <VideoCard
                 title="Become a web developer in 10 minutes"
                 view="2.5M views"
                 timestamp="3 days ago"
                 channelImage="https://yt3.ggpht.com/a-/AOh14GhX1kTmCNgahq2-PG6cV6fW9V75FAi1ECaoDg=s68-c-k-c0x00ffffff-no-rj-mo"
                 channel="MGM Technology"
                 image="https://i.ytimg.com/vi/t1aXuJkmTg8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDapi4poBGJzUziN5WVJRpDzVpE_g"
                 />
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    view="2.5M views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhX1kTmCNgahq2-PG6cV6fW9V75FAi1ECaoDg=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="MGM Technology"
                    image="https://i.ytimg.com/vi/t1aXuJkmTg8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDapi4poBGJzUziN5WVJRpDzVpE_g"/>
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    view="2.5M views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhX1kTmCNgahq2-PG6cV6fW9V75FAi1ECaoDg=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="MGM Technology"
                    image="https://i.ytimg.com/vi/t1aXuJkmTg8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDapi4poBGJzUziN5WVJRpDzVpE_g"/>
                <VideoCard
                    title="Become a web developer in 10 minutes"
                    view="2.5M views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhX1kTmCNgahq2-PG6cV6fW9V75FAi1ECaoDg=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="MGM Technology"
                    image="https://i.ytimg.com/vi/t1aXuJkmTg8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDapi4poBGJzUziN5WVJRpDzVpE_g"/>
            </div>
        </div>
    )
}

export default RecommendedVideos
