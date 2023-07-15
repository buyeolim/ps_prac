/*
강원도에 위치한 생산공장 목록 출력하기
https://school.programmers.co.kr/learn/courses/30/lessons/131112
 */

SELECT factory_id, factory_name, address
    FROM food_factory
    WHERE address LIKE '강원도%'
    ORDER BY factory_id ASC