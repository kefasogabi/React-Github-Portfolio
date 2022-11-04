import React from 'react'

export default function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="text-center">
        <h1 className="display-1 fw-bold"><span className="text-danger">Opps!</span> </h1>
        <p className="fs-3 text-white">
        An unexpected error occured!
        </p>
        <p className="lead text-white">{error.message}</p>
        <button onClick={resetErrorBoundary} className="btn btn-primary">
          Try Again
        </button>
      </div>
    </div>
  )
}
