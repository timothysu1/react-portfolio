import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError();

  return (
    <div>
      <h2>An Error has Occurred</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

    </div>
  )
}