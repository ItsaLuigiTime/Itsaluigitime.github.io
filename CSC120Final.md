flowchart TD
    A[Rock Paper Scissors] --> B(Get P1 choice)
    B --> C[Get P2 choice]
    C -->D[Compare choices; 0, 1, or 2]
    D -- If P1>P2 OR if P2 = 2 AND P1 = 0 -->E[P1 Wins]
    D -- if P1=P2 -->F[Tie]
    D -- Else -->G[P2 wins]
