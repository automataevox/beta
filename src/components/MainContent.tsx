import { Typography } from '@mui/material'
import React from 'react'
import { Card } from './styled'
import { Navigate, Route, Routes } from 'react-router'
import MainElement from './MainElement'
import AboutElement from './AboutElement'
import { Redirect } from '../App'

const Content = () => {

    return (
        <div style={{display: 'grid', gap: 9}} id={"contentParent"}>
            <Routes>
                <Route path="/" element={<MainElement />} />
                <Route path="/home" element={<Navigate to={"/"} />} />
                <Route path="/listen" element={<Redirect red={"music"} />} />
                <Route path="/code" element={<Redirect red={"code"} />} />
                <Route path="/about" element={<AboutElement />} />
            </Routes>
            <div style={{display: "grid", gridTemplateRows: "auto 1fr auto", gap: 10}}>
                <iframe src="https://discord.com/widget?id=836868239794765865&theme=dark" width="100%" height="500" allowTransparency frameBorder={0} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                
                <Card>
                    <div style={{display: "grid", placeItems: "center", minHeight: "5rem"}}>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7161282579203057"
     crossorigin="anonymous"></script>
                    
                    </div>
                </Card>

                <Card>
                    <div style={{display: "grid", placeItems: "center", minHeight: "5rem", maxHeight: "10rem"}}>
                        <Typography variant="body1" sx={{fontSize: '1.2rem', fontFamily: 'VT323'}}>
                            Copyright 2023 - Jaroslav Maša
                        </Typography>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Content