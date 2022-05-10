import React from 'react'

export default function RegError(props) {
  return (
    props.alert && (
        <div class="alert alert-danger text-center" role="alert">
          Invalid credentials !
        </div>
      )
  )
}
