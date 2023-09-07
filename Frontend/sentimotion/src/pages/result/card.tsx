import React, { useEffect, useState } from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardHeader, Grid } from "@mui/material";

function shuffleArray(array: any) {
  // Create a copy of the original array to avoid modifying it directly
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function getRandomCards(videoData: { url: string; image: string; title: string; }[], count: number | undefined) {
  const shuffledData = shuffleArray(videoData);
  return shuffledData.slice(0, count);
}

interface VideoData {
    url: string;
    image: string;
    title: string;
  }

interface VideoProps {
    emotion: string;
}

function VideoRecommendations(porps:VideoProps) {
    const {emotion} = porps;
    let videoData: VideoData[] = []; 

if (emotion === "Happy") {
    videoData = [
        {
          url: "https://youtu.be/_JmA2ClUvUY",
          image: "https://img.youtube.com/vi/_JmA2ClUvUY/hqdefault.jpg",
          title: "These twin babies 'talking' to each other",
        },
        {
          url: "https://youtu.be/5_sfnQDr1-o",
          image: "https://img.youtube.com/vi/5_sfnQDr1-o/hqdefault.jpg",
          title: "Baby Monkey (Going Backwards On A Pig)",
        },
        {
          url: "https://youtu.be/3symtHjQLNw",
          image: "https://img.youtube.com/vi/3symtHjQLNw/hqdefault.jpg",
          title: "This dog who is super excited when his owner comes back from Afghanistan",
        },
        {
          url: "https://youtu.be/B-Wd-Q3F8KM",
          image: "https://img.youtube.com/vi/B-Wd-Q3F8KM/hqdefault.jpg",
          title: "My Wedding Speech",
        },
        {
          url: "https://youtu.be/yJ7-v7xVm3I",
          image: "https://img.youtube.com/vi/yJ7-v7xVm3I/hqdefault.jpg",
          title: "Bump to Buzz",
        },
        {
          url: "https://youtu.be/RP4abiHdQpc",
          image: "https://img.youtube.com/vi/RP4abiHdQpc/hqdefault.jpg",
          title: "Baby Laughing Hysterically at Ripping Paper",
        },
        {
          url: "https://youtu.be/wU4DgHHwVCc",
          image: "https://img.youtube.com/vi/wU4DgHHwVCc/hqdefault.jpg",
          title: "Buzz and the Dandelions",
        },
        {
          url: "https://youtu.be/SGUkKb3HDUU",
          image: "https://img.youtube.com/vi/SGUkKb3HDUU/hqdefault.jpg",
          title: "These people giving out free hugs",
        },

      ];
    }
    else if (emotion === "Sad") {
    videoData = [
        {
            url: "https://youtu.be/_JmA2ClUvUY",
            image: "https://img.youtube.com/vi/_JmA2ClUvUY/hqdefault.jpg",
            title: "These twin babies 'talking' to each other",
          },
          {
            url: "https://youtu.be/5_sfnQDr1-o",
            image: "https://img.youtube.com/vi/5_sfnQDr1-o/hqdefault.jpg",
            title: "Baby Monkey (Going Backwards On A Pig)",
          },
          {
            url: "https://youtu.be/3symtHjQLNw",
            image: "https://img.youtube.com/vi/3symtHjQLNw/hqdefault.jpg",
            title: "This dog who is super excited when his owner comes back from Afghanistan",
          },
          {
            url: "https://youtu.be/B-Wd-Q3F8KM",
            image: "https://img.youtube.com/vi/B-Wd-Q3F8KM/hqdefault.jpg",
            title: "My Wedding Speech",
          },
          {
            url: "https://youtu.be/yJ7-v7xVm3I",
            image: "https://img.youtube.com/vi/yJ7-v7xVm3I/hqdefault.jpg",
            title: "Bump to Buzz",
          },
          {
            url: "https://youtu.be/RP4abiHdQpc",
            image: "https://img.youtube.com/vi/RP4abiHdQpc/hqdefault.jpg",
            title: "Baby Laughing Hysterically at Ripping Paper",
          },
          {
            url: "https://youtu.be/wU4DgHHwVCc",
            image: "https://img.youtube.com/vi/wU4DgHHwVCc/hqdefault.jpg",
            title: "Buzz and the Dandelions",
          },
          {
            url: "https://youtu.be/SGUkKb3HDUU",
            image: "https://img.youtube.com/vi/SGUkKb3HDUU/hqdefault.jpg",
            title: "These people giving out free hugs",
          },
        ]
    }
    else if (emotion === "Angry") {
    videoData = [
        {
            url: "https://youtu.be/_JmA2ClUvUY",
            image: "https://img.youtube.com/vi/_JmA2ClUvUY/hqdefault.jpg",
            title: "These twin babies 'talking' to each other",
          },
          {
            url: "https://youtu.be/5_sfnQDr1-o",
            image: "https://img.youtube.com/vi/5_sfnQDr1-o/hqdefault.jpg",
            title: "Baby Monkey (Going Backwards On A Pig)",
          },
          {
            url: "https://youtu.be/3symtHjQLNw",
            image: "https://img.youtube.com/vi/3symtHjQLNw/hqdefault.jpg",
            title: "This dog who is super excited when his owner comes back from Afghanistan",
          },
          {
            url: "https://youtu.be/B-Wd-Q3F8KM",
            image: "https://img.youtube.com/vi/B-Wd-Q3F8KM/hqdefault.jpg",
            title: "My Wedding Speech",
          },
          {
            url: "https://youtu.be/yJ7-v7xVm3I",
            image: "https://img.youtube.com/vi/yJ7-v7xVm3I/hqdefault.jpg",
            title: "Bump to Buzz",
          },
          {
            url: "https://youtu.be/RP4abiHdQpc",
            image: "https://img.youtube.com/vi/RP4abiHdQpc/hqdefault.jpg",
            title: "Baby Laughing Hysterically at Ripping Paper",
          },
          {
            url: "https://youtu.be/wU4DgHHwVCc",
            image: "https://img.youtube.com/vi/wU4DgHHwVCc/hqdefault.jpg",
            title: "Buzz and the Dandelions",
          },
          {
            url: "https://youtu.be/SGUkKb3HDUU",
            image: "https://img.youtube.com/vi/SGUkKb3HDUU/hqdefault.jpg",
            title: "These people giving out free hugs",
          },
        ]
    }
    else if (emotion === "Surprise") {
    videoData = [
        {
            url: "https://youtu.be/_JmA2ClUvUY",
            image: "https://img.youtube.com/vi/_JmA2ClUvUY/hqdefault.jpg",
            title: "These twin babies 'talking' to each other",
          },
          {
            url: "https://youtu.be/5_sfnQDr1-o",
            image: "https://img.youtube.com/vi/5_sfnQDr1-o/hqdefault.jpg",
            title: "Baby Monkey (Going Backwards On A Pig)",
          },
          {
            url: "https://youtu.be/3symtHjQLNw",
            image: "https://img.youtube.com/vi/3symtHjQLNw/hqdefault.jpg",
            title: "This dog who is super excited when his owner comes back from Afghanistan",
          },
          {
            url: "https://youtu.be/B-Wd-Q3F8KM",
            image: "https://img.youtube.com/vi/B-Wd-Q3F8KM/hqdefault.jpg",
            title: "My Wedding Speech",
          },
          {
            url: "https://youtu.be/yJ7-v7xVm3I",
            image: "https://img.youtube.com/vi/yJ7-v7xVm3I/hqdefault.jpg",
            title: "Bump to Buzz",
          },
          {
            url: "https://youtu.be/RP4abiHdQpc",
            image: "https://img.youtube.com/vi/RP4abiHdQpc/hqdefault.jpg",
            title: "Baby Laughing Hysterically at Ripping Paper",
          },
          {
            url: "https://youtu.be/wU4DgHHwVCc",
            image: "https://img.youtube.com/vi/wU4DgHHwVCc/hqdefault.jpg",
            title: "Buzz and the Dandelions",
          },
          {
            url: "https://youtu.be/SGUkKb3HDUU",
            image: "https://img.youtube.com/vi/SGUkKb3HDUU/hqdefault.jpg",
            title: "These people giving out free hugs",
          },
        ]
    }
    else if (emotion === "Fear") {
    videoData = [
        {
            url: "https://youtu.be/_JmA2ClUvUY",
            image: "https://img.youtube.com/vi/_JmA2ClUvUY/hqdefault.jpg",
            title: "These twin babies 'talking' to each other",
          },
          {
            url: "https://youtu.be/5_sfnQDr1-o",
            image: "https://img.youtube.com/vi/5_sfnQDr1-o/hqdefault.jpg",
            title: "Baby Monkey (Going Backwards On A Pig)",
          },
          {
            url: "https://youtu.be/3symtHjQLNw",
            image: "https://img.youtube.com/vi/3symtHjQLNw/hqdefault.jpg",
            title: "This dog who is super excited when his owner comes back from Afghanistan",
          },
          {
            url: "https://youtu.be/B-Wd-Q3F8KM",
            image: "https://img.youtube.com/vi/B-Wd-Q3F8KM/hqdefault.jpg",
            title: "My Wedding Speech",
          },
          {
            url: "https://youtu.be/yJ7-v7xVm3I",
            image: "https://img.youtube.com/vi/yJ7-v7xVm3I/hqdefault.jpg",
            title: "Bump to Buzz",
          },
          {
            url: "https://youtu.be/RP4abiHdQpc",
            image: "https://img.youtube.com/vi/RP4abiHdQpc/hqdefault.jpg",
            title: "Baby Laughing Hysterically at Ripping Paper",
          },
          {
            url: "https://youtu.be/wU4DgHHwVCc",
            image: "https://img.youtube.com/vi/wU4DgHHwVCc/hqdefault.jpg",
            title: "Buzz and the Dandelions",
          },
          {
            url: "https://youtu.be/SGUkKb3HDUU",
            image: "https://img.youtube.com/vi/SGUkKb3HDUU/hqdefault.jpg",
            title: "These people giving out free hugs",
          },
        ]
    }
    else if (emotion === "Disgust") {
    videoData = [
        {
            url: "https://youtu.be/_JmA2ClUvUY",
            image: "https://img.youtube.com/vi/_JmA2ClUvUY/hqdefault.jpg",
            title: "These twin babies 'talking' to each other",
          },
          {
            url: "https://youtu.be/5_sfnQDr1-o",
            image: "https://img.youtube.com/vi/5_sfnQDr1-o/hqdefault.jpg",
            title: "Baby Monkey (Going Backwards On A Pig)",
          },
          {
            url: "https://youtu.be/3symtHjQLNw",
            image: "https://img.youtube.com/vi/3symtHjQLNw/hqdefault.jpg",
            title: "This dog who is super excited when his owner comes back from Afghanistan",
          },
          {
            url: "https://youtu.be/B-Wd-Q3F8KM",
            image: "https://img.youtube.com/vi/B-Wd-Q3F8KM/hqdefault.jpg",
            title: "My Wedding Speech",
          },
          {
            url: "https://youtu.be/yJ7-v7xVm3I",
            image: "https://img.youtube.com/vi/yJ7-v7xVm3I/hqdefault.jpg",
            title: "Bump to Buzz",
          },
          {
            url: "https://youtu.be/RP4abiHdQpc",
            image: "https://img.youtube.com/vi/RP4abiHdQpc/hqdefault.jpg",
            title: "Baby Laughing Hysterically at Ripping Paper",
          },
          {
            url: "https://youtu.be/wU4DgHHwVCc",
            image: "https://img.youtube.com/vi/wU4DgHHwVCc/hqdefault.jpg",
            title: "Buzz and the Dandelions",
          },
          {
            url: "https://youtu.be/SGUkKb3HDUU",
            image: "https://img.youtube.com/vi/SGUkKb3HDUU/hqdefault.jpg",
            title: "These people giving out free hugs",
          },
        ]
    }
    else if (emotion === "Neutral") {
    videoData = [
        {
            url: "https://youtu.be/_JmA2ClUvUY",
            image: "https://img.youtube.com/vi/_JmA2ClUvUY/hqdefault.jpg",
            title: "These twin babies 'talking' to each other",
          },
          {
            url: "https://youtu.be/5_sfnQDr1-o",
            image: "https://img.youtube.com/vi/5_sfnQDr1-o/hqdefault.jpg",
            title: "Baby Monkey (Going Backwards On A Pig)",
          },
          {
            url: "https://youtu.be/3symtHjQLNw",
            image: "https://img.youtube.com/vi/3symtHjQLNw/hqdefault.jpg",
            title: "This dog who is super excited when his owner comes back from Afghanistan",
          },
          {
            url: "https://youtu.be/B-Wd-Q3F8KM",
            image: "https://img.youtube.com/vi/B-Wd-Q3F8KM/hqdefault.jpg",
            title: "My Wedding Speech",
          },
          {
            url: "https://youtu.be/yJ7-v7xVm3I",
            image: "https://img.youtube.com/vi/yJ7-v7xVm3I/hqdefault.jpg",
            title: "Bump to Buzz",
          },
          {
            url: "https://youtu.be/RP4abiHdQpc",
            image: "https://img.youtube.com/vi/RP4abiHdQpc/hqdefault.jpg",
            title: "Baby Laughing Hysterically at Ripping Paper",
          },
          {
            url: "https://youtu.be/wU4DgHHwVCc",
            image: "https://img.youtube.com/vi/wU4DgHHwVCc/hqdefault.jpg",
            title: "Buzz and the Dandelions",
          },
          {
            url: "https://youtu.be/SGUkKb3HDUU",
            image: "https://img.youtube.com/vi/SGUkKb3HDUU/hqdefault.jpg",
            title: "These people giving out free hugs",
          },
        ]
    }
    else {
    videoData = [
        {
            url: "https://youtu.be/_JmA2ClUvUY",
            image: "https://img.youtube.com/vi/_JmA2ClUvUY/hqdefault.jpg",
            title: "These twin babies 'talking' to each other",
          },
          {
            url: "https://youtu.be/5_sfnQDr1-o",
            image: "https://img.youtube.com/vi/5_sfnQDr1-o/hqdefault.jpg",
            title: "Baby Monkey (Going Backwards On A Pig)",
          },
          {
            url: "https://youtu.be/3symtHjQLNw",
            image: "https://img.youtube.com/vi/3symtHjQLNw/hqdefault.jpg",
            title: "This dog who is super excited when his owner comes back from Afghanistan",
          },
          {
            url: "https://youtu.be/B-Wd-Q3F8KM",
            image: "https://img.youtube.com/vi/B-Wd-Q3F8KM/hqdefault.jpg",
            title: "My Wedding Speech",
          },
          {
            url: "https://youtu.be/yJ7-v7xVm3I",
            image: "https://img.youtube.com/vi/yJ7-v7xVm3I/hqdefault.jpg",
            title: "Bump to Buzz",
          },
          {
            url: "https://youtu.be/RP4abiHdQpc",
            image: "https://img.youtube.com/vi/RP4abiHdQpc/hqdefault.jpg",
            title: "Baby Laughing Hysterically at Ripping Paper",
          },
          {
            url: "https://youtu.be/wU4DgHHwVCc",
            image: "https://img.youtube.com/vi/wU4DgHHwVCc/hqdefault.jpg",
            title: "Buzz and the Dandelions",
          },
          {
            url: "https://youtu.be/SGUkKb3HDUU",
            image: "https://img.youtube.com/vi/SGUkKb3HDUU/hqdefault.jpg",
            title: "These people giving out free hugs",
          },
        ]
    }

    const [randomCards, setRandomCards] = useState<VideoData[]>([]);

    useEffect(() => {
      // Get 4 random cards when the component mounts
      const randomCards = getRandomCards(videoData, 4);
      setRandomCards(randomCards);
    }, []);
  

  return (
    <Grid container spacing={2}>
    {randomCards.map((video, index) => (
      <Grid item xs={3} key={index}>
        <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={video.image}
                alt="YouTube"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6" // Changed variant to "h6" for better text size
                  component="div"
                  align="center"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px", // Adjusted font size
                  }}
                >
                  {video.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      </Grid>
    ))}
  </Grid>
  );
}

export default VideoRecommendations;