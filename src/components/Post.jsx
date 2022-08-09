import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
import { Share, MoreVert, FavoriteBorder, Favorite } from '@mui/icons-material';
import Food from '../Assets/Feed/food.jpg'
import Drawing from "../Assets/Feed/drawing.jpg"
import Women from '../Assets/Feed/women.jpg'
import Nature from '../Assets/Feed/nature.jpg'
import Ring from '../Assets/Feed/ring.jpg'

import React from 'react'

const Post = () => {
    const data = [
        {
            id: 1,
            avatar: "A",
            picture: Food,
            Title: "Shrimp and Chorizo Paella",
            subheading: "June 19, 2018",
            text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like"
        },
        {
            id: 2,
            avatar: "R",
            picture: Nature,
            Title: "Nature's Love",
            subheading: "October 9, 2019",
            text: "I think Nature's imagination is so much greater than man's, she's never gonna let us relax! Nature to be commanded must be obeyed. My wish is to stay always like this, living quietly in a corner of nature. Should you shield the canyons from the windstorms you would never see the true beauty of their carvings."
        }
    ]

    return (
        <Box>
            {data?.map((content) => (
                <>
                    <Card sx={{margin:5}}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                    {content.avatar}
                                    {console.log(content.avatar)}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVert />
                                </IconButton>
                            }
                            title={content.Title}
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="18%"
                            image={content.picture}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {content.text}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <Share />
                            </IconButton>
                        </CardActions>
                    </Card>
                    </>
            ))}
        </Box>
    )
}

export default Post