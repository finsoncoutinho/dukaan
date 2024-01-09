import { Stack, Typography } from '@mui/material'
import { FiSearch } from 'react-icons/fi'
import { BiSortAlt2 } from 'react-icons/bi'
import { LuDownload } from 'react-icons/lu'
import TransactionItem from './TransactionItem'
const Table = () => {
  const data = [
    {
      orderID: '#281209',
      status: 'Successful',
      transactionID: '237834096785',
      refundDate: 'Today, 08:45 PM',
      orderAmount: '₹1,125.00',
    },
    {
      orderID: '#281211',
      status: 'Processing',
      transactionID: '237834096785',
      refundDate: 'Today, 08:45 PM',
      orderAmount: '₹1,125.00',
    },
    {
      orderID: '#281209',
      status: 'Successful',
      transactionID: '237834096785',
      refundDate: 'Today, 08:45 PM',
      orderAmount: '₹1,125.00',
    },
    {
      orderID: '#281209',
      status: 'Successful',
      transactionID: '237834096785',
      refundDate: 'Today, 08:45 PM',
      orderAmount: '₹1,125.00',
    },
  ]

  return (
    <Stack marginTop={5}>
      <Typography> Transactions | This Month</Typography>
      <Stack direction='row' spacing={2} marginTop={2}>
        <Typography
          variant='body2'
          sx={{
            bgcolor: '#e6e6e6',
            color: '#909090',
            paddingX: 2,
            paddingY: 1,
            borderRadius: 40,
          }}
        >
          Payouts (22)
        </Typography>
        <Typography
          variant='body2'
          sx={{
            bgcolor: '#146eb4',
            color: '#fff',
            paddingX: 2,
            paddingY: 1,
            borderRadius: 40,
          }}
        >
          Refunds (6)
        </Typography>
      </Stack>

      <Stack
        sx={{
          marginTop: 2,
          padding: 2,
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Stack
            direction='row'
            alignItems='center'
            sx={{
              bgcolor: '#fff',
              borderRadius: 1,
              paddingX: 2,
              paddingY: 1,
              width: 200,
              border: '1px solid #ccc',
            }}
          >
            <FiSearch size={32} stroke='#929292' />
            <input
              style={{
                width: '320px',
                padding: '6px 9px',
                outline: 'none',
                color: '#929292',
                backgroundColor: '#fff',
              }}
              placeholder='Order ID or transaction ID'
            />
          </Stack>
          <Stack direction='row' alignItems='center' spacing={2}>
            <Stack
              direction='row'
              alignItems='center'
              spacing={1}
              sx={{
                color: '#616161',
                border: '1px solid #ccc',
                height: '40px',
                paddingX: 1,
              }}
            >
              <Typography>Sort</Typography>
              <BiSortAlt2 stroke='#616161' />
            </Stack>

            <Stack
              direction='row'
              alignItems='center'
              spacing={1}
              sx={{
                color: '#616161',
                border: '1px solid #ccc',
                height: '40px',

                paddingX: 1,
              }}
            >
              <LuDownload size={20} />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{
            bgcolor: '#f2f2f2',
            color: '#595959',
            borderRadius: 1,
            padding: 1,
            marginTop: 2,
          }}
        >
          <Typography>Order ID</Typography>
          <Typography>Status</Typography>
          <Typography>Transaction ID</Typography>
          <Typography>Refund date</Typography>
          <Typography>Order amount</Typography>
        </Stack>
        {data.map((item) => (
          <TransactionItem key={item.orderID} item={item} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Table
