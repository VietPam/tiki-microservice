FROM eclipse-temurin:17-jre-alpine

EXPOSE 5000

COPY ./target/user-service-*.jar /usr/app/
WORKDIR /usr/app

CMD java -jar user-service-*.jar
