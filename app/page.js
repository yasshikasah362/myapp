"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncaddmovies } from "@/store/Actions/movieAction";
import { changepage, removeerrors } from "@/store/Reducers/movieReducer";
import { toast } from "react-toastify";
import Nav from "@/app/components/Nav";




const page = () => {
    const dispatch = useDispatch();
    const { movies, page, errors } = useSelector((state) => state.movieReducer);
    console.log(errors);

    if (errors.length > 0) {
        errors.map((e, i) => {
            toast.error(e);
        });
        dispatch(removeerrors());
    }

    useEffect(() => {
        // if (movies.length === 0) dispatch(asyncaddmovies());
        dispatch(asyncaddmovies());
    }, [page]);

    return (
        <div>
          <Nav/>
            <hr />
            <div className="d-flex container p-5 mt-3 flex-wrap">
                {movies.map((m, i) => {
                    console.log(m);
                    return (
                      <div class="card" style={{width: '18rem',margin:'auto'}}>
  <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Lorem Ipsum</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href={`/movies/${m.id}`}>{m.title}</Link>
  </div>
</div>
                    );
                })}
            </div>
            <hr />
            <div className=" text-center paginate">
                <button style={{width:'100px', height:'30px', borderRadius:'20px'}} onClick={() => dispatch(changepage(-1))}>
                    Previous
                </button>
                <span className="h1">{page}</span>
                <button style={{width:'100px', height:'30px', borderRadius:'20px'}} onClick={() => dispatch(changepage(1))}>Next</button>
            </div>
        </div>
    );
};

export default page;