'use client'
import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

//   const targetDate = new Date()
//   targetDate.setDate(targetDate.getDate() + 30)

  const targetDate = new Date();

   // Set the target date to the last day of the current month
  targetDate.setMonth(targetDate.getMonth() + 1); // Move to the next month
  targetDate.setDate(0); // Set to the last day of the previous month (i.e., the current month's last day)

    console.log(targetDate);

    // const now = new Date(); // Current date and time

    // // Set the target date to the first day of the current month
    // const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // // Set the target date to the last day of the current month, keeping the time of the current moment
    // const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    // endOfMonth.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());

    // console.log("Start of month:", startOfMonth);
    // console.log("End of month with current time:", endOfMonth);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // I can add code here to handle what happens when the target date is reached.
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}><b>DIWALI SALE</b></h3>
        <p>
          Get ready for a shopping experience like never before with our Diwali Sale! Every
          purchase will come with exclusive perks and offers, making Diwali a celebration of lights with health. 
          Don't miss out! 🎁🛒. Wish you all a Very Happy Diwali from Raptor Bikes. 
        </p>

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion