/* eslint-disable react/no-unknown-property */
import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Table from './table'
const PayoutLayout = () => {
  const [selectedOption, setSelectedOption] = useState('option1')
  return (
    <Stack
      sx={{
        bgcolor: '#fafafa',
        width: '80vw',
        padding: 2,
        paddingTop: 5,
        height: '86vh',
      }}
    >
      <Stack direction='row' justifyContent='space-between'>
        <Typography sx={{ fontSize: 20 }}>Overview</Typography>

        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            outline: 'none',
            border: '1px solid #ccc',
            padding: '0px 2px',
          }}
        >
          <option value=''>None</option>
          <option value='option1'>This Month</option>
          <option value='option2'>Last 3 Months</option>
          <option value='option3'>Last 6 Months</option>
        </select>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Stack
          spacing={2}
          sx={{
            bgcolor: '#146eb4',

            paddingTop: 2,
            width: 350,
            borderRadius: 2,
            marginTop: 2,
          }}
        >
          <Stack
            sx={{
              paddingX: 2,
            }}
          >
            <Stack direction='row' alignItems='center' spacing={1}>
              <Typography variant='body2' sx={{ color: 'white' }}>
                Next Payout
              </Typography>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_5730_2522)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z'
                    fill='#fff'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z'
                    fill='#fff'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z'
                    fill='#fff'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_5730_2522'>
                    <rect width='14' height='14' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </Stack>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent={'space-between'}
            sx={{
              paddingX: 2,
            }}
          >
            <Typography sx={{ color: 'white', fontSize: 28 }}>
              ₹2,312.23
            </Typography>
            <Stack direction='row' alignItems='center'>
              <Typography
                variant='caption'
                sx={{ color: 'white', textDecoration: 'underline' }}
              >
                23 orders
              </Typography>
              <IoIosArrowForward size={20} fill='#fff' />
            </Stack>
          </Stack>
          <Stack
            direction='row'
            justifyContent={'space-between'}
            sx={{
              bgcolor: '#0e4f82',
              paddingX: 2,
              paddingY: 1,
              borderRadius: 2,
            }}
          >
            <Typography variant='caption' sx={{ color: 'white' }}>
              Next payout date:
            </Typography>
            <Typography variant='caption' sx={{ color: 'white' }}>
              Today, 04:00PM
            </Typography>
          </Stack>
        </Stack>
        <Stack
          spacing={2}
          sx={{
            bgcolor: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: 2,
            width: 350,
            height: 80,
            borderRadius: 2,
            marginTop: 2,
          }}
        >
          <Stack>
            <Stack direction='row' alignItems='center' spacing={1}>
              <Typography variant='body2' sx={{ color: '#4D4D4D' }}>
                Amount Pending
              </Typography>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_5730_2522)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z'
                    fill='#4D4D4D'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z'
                    fill='#4D4D4D'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z'
                    fill='#4D4D4D'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_5730_2522'>
                    <rect width='14' height='14' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </Stack>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent={'space-between'}
          >
            <Typography sx={{ fontSize: 28 }}>₹2,312.23</Typography>
            <Stack direction='row' alignItems='center'>
              <Typography
                variant='caption'
                sx={{ color: '#156fb4', textDecoration: 'underline' }}
              >
                13 orders
              </Typography>
              <IoIosArrowForward size={20} fill='#156fb4' />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          spacing={2}
          sx={{
            bgcolor: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: 2,
            height: 80,

            width: 350,
            borderRadius: 2,
            marginTop: 2,
          }}
        >
          <Stack>
            <Stack direction='row' alignItems='center' spacing={1}>
              <Typography variant='body2' sx={{ color: '#4D4D4D' }}>
                Amount Processed
              </Typography>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_5730_2522)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z'
                    fill='#4D4D4D'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z'
                    fill='#4D4D4D'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z'
                    fill='#4D4D4D'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_5730_2522'>
                    <rect width='14' height='14' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center'>
            <Typography sx={{ fontSize: 28 }}>₹23,92,312.19</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Table />
    </Stack>
  )
}

export default PayoutLayout
