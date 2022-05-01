import { useEffect, useState } from "react";
import { pokefunc } from "../helpers/Pokefunc";

const usePokemon = (CrPoket) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    pokefunc(CrPoket).then((pk) => {
      setState({
        data: pk,
        loading: false,
      });
    });
  }, [CrPoket]);

  return state;
};

export default usePokemon;
