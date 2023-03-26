function useaReload(initialState) {
    const [reload, setReload] = useState(initialState);
    const increment_state = useRef(initialState);
    
    useEffect(() => {
      increment_state.current = increment_state.current +1;
      console.log(increment_state)

    });

    return reload, setReload
 
}