
const error = ({error}:{error:Error}) => {
//  throw new Error('error')

  return <div>error: {error.message}</div>;
}

export default error