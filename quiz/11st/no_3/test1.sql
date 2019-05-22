-- select *
select AA.team_id, AA.team_name, sum( ( AA.num_points + BB.num_points ) ) as num_points
from (
    -- select match_id, host_team, host_goals, guest_goals, team_id, team_name,
    select A.team_id, A.team_name, sum(
        case 
        when host_goals > guest_goals then 3
        when host_goals = guest_goals then 1
        else 0
        end ) as num_points
    from
        teams A left join
        matches B 
        ON A.team_id = B.host_team
    group by A.team_id
    order by A.team_id asc
) AA left join
(
    -- select *,
    select A.team_id, A.team_name, sum(
        case 
        when host_goals < guest_goals then 3
        when host_goals = guest_goals then 1
        else 0
        end ) as num_points
    from
        teams A left join
        matches B 
        ON A.team_id = B.guest_team
    group by A.team_id
    order by A.team_id asc
) BB
ON AA.team_id = BB.team_id
group by team_id
order by num_points desc
