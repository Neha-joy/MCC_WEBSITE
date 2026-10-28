import { useEffect, useState } from "react";
import {
  Puzzle,
  X,
  RotateCcw
} from "lucide-react";

const SIZE = 3;

function createSolvedTiles() {
  return Array.from(
    { length: SIZE * SIZE },
    (_, index) => index
  );
}

function shuffleTiles() {
  let shuffled = createSolvedTiles();

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

export default function BuildingGame() {

  const [open, setOpen] = useState(false);

  const [tiles, setTiles] = useState(
    createSolvedTiles()
  );

  const [started, setStarted] = useState(false);

  const [completed, setCompleted] = useState(false);

  const [showHand, setShowHand] = useState(true);

  const imageUrl =
    "/assets/building-puzzle.png";


  /* =========================================
     HAND SHOWS FOR 3 SEC EVERY 15 SEC
  ========================================= */

  useEffect(() => {

    let hideTimer;

    const showPointer = () => {

      if (open) {
        setShowHand(false);
        return;
      }

      setShowHand(true);

      hideTimer = setTimeout(() => {
        setShowHand(false);
      }, 3000);

    };


    /* FIRST APPEARANCE */

    showPointer();


    /* REPEAT EVERY 15 SECONDS */

    const interval = setInterval(() => {
      showPointer();
    }, 5000);


    return () => {

      clearInterval(interval);

      if (hideTimer) {
        clearTimeout(hideTimer);
      }

    };

  }, [open]);


  /* =========================================
     RESET WHEN GAME CLOSES
  ========================================= */

  useEffect(() => {

    if (!open) {

      setTiles(
        createSolvedTiles()
      );

      setStarted(false);

      setCompleted(false);

    }

  }, [open]);


  /* =========================================
     START / SHUFFLE
  ========================================= */

  const startGame = () => {

    setTiles(
      shuffleTiles()
    );

    setStarted(true);

    setCompleted(false);

  };


  /* =========================================
     MOVE PUZZLE TILE
  ========================================= */

  const moveTile = (index) => {

    if (!started || completed) {
      return;
    }

    const newTiles = [...tiles];

    const emptyTile =
      SIZE * SIZE - 1;

    const emptyIndex =
      newTiles.indexOf(emptyTile);


    const selectedRow =
      Math.floor(index / SIZE);

    const selectedColumn =
      index % SIZE;

    const emptyRow =
      Math.floor(emptyIndex / SIZE);

    const emptyColumn =
      emptyIndex % SIZE;


    const isAdjacent =
      Math.abs(
        selectedRow - emptyRow
      ) +
      Math.abs(
        selectedColumn - emptyColumn
      ) === 1;


    if (!isAdjacent) {
      return;
    }


    [
      newTiles[index],
      newTiles[emptyIndex]
    ] = [
      newTiles[emptyIndex],
      newTiles[index]
    ];


    setTiles(newTiles);


    const solved =
      newTiles.every(
        (tile, tileIndex) =>
          tile === tileIndex
      );


    if (solved) {
      setCompleted(true);
    }

  };


  /* =========================================
     OPEN GAME
  ========================================= */

  const openGame = () => {

    setOpen(true);

    setShowHand(false);

  };


  /* =========================================
     CLOSE GAME
  ========================================= */

  const closeGame = () => {

    setOpen(false);

    setShowHand(false);

  };


  return (
    <>

      {/* =====================================
          ANIMATED HAND
      ====================================== */}

      {showHand && !open && (

        <div className="game-hand-pointer">

          <div className="game-hand-label">
            PLAY GAME
          </div>

          <span className="game-hand-icon">
            👉
          </span>

        </div>

      )}


      {/* =====================================
          FLOATING GAME BUTTON
      ====================================== */}

      {!open && (

        <button
          type="button"
          className="floating-puzzle-btn"
          onClick={openGame}
          aria-label="Play building puzzle"
        >

          <span className="puzzle-pulse" />

          <Puzzle />

        </button>

      )}



      {/* =====================================
          GAME POPUP
      ====================================== */}

      {open && (

        <div className="picture-puzzle-box">


          {/* HEADER */}

          <div className="picture-puzzle-header">

            <div>

              <span>
                MCC MINI GAME
              </span>

              <strong>
                BUILDING PUZZLE
              </strong>

            </div>


            <button
              type="button"
              className="picture-puzzle-close"
              onClick={closeGame}
              aria-label="Close puzzle"
            >

              <X size={18} />

            </button>

          </div>



          {/* =====================================
              PUZZLE BOARD
          ====================================== */}

          <div className="picture-puzzle-board">

            {tiles.map(
              (tile, index) => {

                const emptyTile =
                  SIZE * SIZE - 1;

                const isEmpty =
                  tile === emptyTile;

                const row =
                  Math.floor(
                    tile / SIZE
                  );

                const column =
                  tile % SIZE;


                return (

                  <button
                    key={`${tile}-${index}`}
                    type="button"

                    className={
                      `puzzle-tile ${
                        isEmpty
                          ? "empty"
                          : ""
                      }`
                    }

                    onClick={() =>
                      moveTile(index)
                    }

                    aria-label={
                      isEmpty
                        ? "Empty puzzle space"
                        : `Puzzle tile ${tile + 1}`
                    }

                    style={
                      !isEmpty
                        ? {

                            backgroundImage:
                              `url(${imageUrl})`,

                            backgroundSize:
                              `${SIZE * 100}% ${SIZE * 100}%`,

                            backgroundPosition:
                              `${
                                (
                                  column /
                                  (SIZE - 1)
                                ) * 100
                              }% ${
                                (
                                  row /
                                  (SIZE - 1)
                                ) * 100
                              }%`

                          }
                        : {}
                    }
                  />

                );

              }
            )}

          </div>



          {/* =====================================
              START BUTTON
          ====================================== */}

          {!started && (

            <button
              type="button"
              className="puzzle-start-btn"
              onClick={startGame}
            >

              Start Puzzle

            </button>

          )}



          {/* =====================================
              MESSAGE
          ====================================== */}

          {started && !completed && (

            <p className="puzzle-message">

              Arrange the square tiles to rebuild
              the construction image.

            </p>

          )}



          {/* =====================================
              SUCCESS
          ====================================== */}

          {completed && (

            <div className="puzzle-success">

              🎉 Building completed successfully!

            </div>

          )}



          {/* =====================================
              SHUFFLE AGAIN
          ====================================== */}

          <button
            type="button"
            className="puzzle-reset"
            onClick={startGame}
          >

            <RotateCcw size={14} />

            Shuffle Again

          </button>

        </div>

      )}

    </>
  );
}