SELECT A.team_id AS team_id, A.team_name AS team_name, sum( ( A.num_points + B.num_points ) ) AS num_points
FROM (
    SELECT T.team_id, T.team_name, sum(
            CASE 
                WHEN M.host_goals > M.guest_goals THEN 3
                WHEN M.host_goals = M.guest_goals THEN 1
                ELSE 0
            END
        ) AS num_points
    FROM teams T LEFT JOIN matches M ON T.team_id = M.host_team
    GROUP BY T.team_id
    ORDER BY T.team_id ASC
) A LEFT JOIN (
    SELECT T.team_id, T.team_name, sum(
            CASE 
                WHEN M.host_goals < M.guest_goals THEN 3
                WHEN M.host_goals = M.guest_goals THEN 1
                ELSE 0
            END 
        ) AS num_points
    FROM teams T LEFT JOIN matches M ON T.team_id = M.guest_team
    GROUP BY T.team_id
    ORDER BY T.team_id ASC
) B
ON A.team_id = B.team_id
GROUP BY team_id
ORDER BY num_points DESC