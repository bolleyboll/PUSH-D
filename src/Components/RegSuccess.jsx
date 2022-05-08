import React from 'react'

export default function RegSuccess(props) {
  return (
    props.alert && (
        <div class="alert alert-success text-center" role="alert">
          Registration succesful, you can now login !
        </div>
      )
  )
}
