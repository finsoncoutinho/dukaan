/* eslint-disable react/prop-types */
import { Stack, Typography } from '@mui/material'
import { GoDotFill } from 'react-icons/go'
const TransactionItem = ({ item }) => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        paddingY: 2,
        paddingX: 1,
        borderBottom: '2px solid #eee',
      }}
    >
      <Typography variant='body2' sx={{ color: '#146eb4' }}>
        {item.orderID}
      </Typography>
      <Stack direction='row' alignItems='center'>
        <GoDotFill
          fill={item.status === 'Successful' ? '#16b31a' : '#a6a6a6'}
        />
        <Typography variant='body2'>{item.status}</Typography>
      </Stack>
      <Typography variant='body2'>{item.transactionID}</Typography>
      <Typography variant='body2'>{item.refundDate}</Typography>
      <Typography variant='body2'>{item.orderAmount}</Typography>
    </Stack>
  )
}

export default TransactionItem
