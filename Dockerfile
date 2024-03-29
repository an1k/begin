FROM node:8.11

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .


#RUN useradd -c 'Node.js user' -m -d /home/node -s /bin/bash node
RUN chown -R node.node /usr/src/app

USER node
ENV HOME /home/node
ENV BCKPORT 8081
ENV BCKURL http://begin-backend-git-testproject.apps.openshift-test.accenturemywizard-aaam.com.au/
ENV PORT 8080
EXPOSE 8080

CMD [ "npm", "start" ]

