// A Feed is composed of a list of the most recent status updates
// Up to 8 status updates are displayed

export default function Feed() {
  const params = useParams();
  const [statusUpdates, setStatusUpdates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(function() {
    let statusUpdates = params.statusUpdates;
    Axios.get('http://localhost:8000/api/pokemon/' + pokemonId)
      .then(function(response) {
        const statusUpdate = response.data;
        setStatusUpdates(statusUpdates);
      })
      .catch(function(error) {
        setIsError(true);
      })
      .finally(function() {
        setIsLoading(false);
      })
  }, [])

  const feed = [];
  for (let i = 0; i < 7; i++) {
    const feed_components = (
      <StatusUpdate value={statusUpdates[i]}/>
    )
    feed.push(feed_components);
  }

  if (isLoading) {
    return (<div>
      Loading.......
    </div>)
  }
  if (isError) {
    return (<div>
      Could not display feed
    </div>)
  }

  return (<div>
    {feed}
  </div>)
}