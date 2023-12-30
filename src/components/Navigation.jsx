import { HomeIcon } from "@mui/icons-material"
import { Explore } from "@mui/icons-material"
import { Notifications } from "@mui/icons-material"
import { Message } from "@mui/icons-material"
import { ListAlt } from "@mui/icons-material"
import { Group } from "@mui/icons-material"
import { AccountCircle } from "@mui/icons-material"
import { Pending } from "@mui/icons-material"
import { Icon } from "@mui/material"
import { Link, Navigate } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="h-screen sticky top-0">
        <div>
            <div className="py-5">
                <svg height="30" width="30" viewBox="0 0 24 24" aria-hidden="true" class="r-jwi3a">
                    <g>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                </svg>

            </div>
        </div>
    </div>

  )
}
