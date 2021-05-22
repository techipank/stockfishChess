import React from "react";
import Chessboard from "chessboardjsx";

import StockFish from "./integrations/Stockfish.js";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Demo = () => {
  const [displayBoard, setDisplayBoard] = React.useState(false);
  const classes = useStyles();
  return (
    <div style={boardsContainer}>
      {displayBoard && (
        <StockFish>
          {({ position, onDrop }) => (
            <Chessboard
              id="stockfish"
              position={position}
              width={320}
              onDrop={onDrop}
              boardStyle={boardStyle}
              orientation="black"
            />
          )}
        </StockFish>
      )}
      {!displayBoard && (
        <React.Fragment>
          <Button variant="contained" color="primary" onClick={() => setDisplayBoard(true)}>
            Start A Game
          </Button>
          <Button variant="contained" color="primary" onClick={() => setDisplayBoard(true)}>
            Wallet
          </Button>
          <Button variant="contained" color="primary" onClick={() => setDisplayBoard(true)}>
            Leaderboard
          </Button>
          <Button variant="contained" color="primary" onClick={() => setDisplayBoard(true)}>
            How to Play
          </Button>
        </React.Fragment>
      )}

    </div>
  );
}

export default Demo;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};
const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
};
