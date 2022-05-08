import React from 'react'

export default function PassConPassMatch(props) {
  return (
    props.alert && (
        <div class="alert alert-danger text-center" role="alert">
          Password and Confirm Password donot match !
        </div>
      )
  )
}
