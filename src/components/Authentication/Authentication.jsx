import { Grid } from '@mui/material'
import React from 'react'

export default function Authentication() {
  return (
    <div>
      <Grid className='overflow-y-hidden' container>
        <Grid className='hidden lg:block' item lg={7}>
          <div className='absolute top-[26%] left-[19%]'>
            <svg height="300" width="300" viewBox='0 0 24 24'><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
